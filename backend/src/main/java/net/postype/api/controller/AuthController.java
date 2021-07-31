package net.postype.api.controller;

import net.postype.api.config.jwt.AuthUserDetailsService;
import net.postype.api.typings.JwtRequest;
import net.postype.api.config.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class AuthController {

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AuthUserDetailsService userDetailsService;

    @PostMapping("/api/auth/login")
    public Map<String, Object> login(@RequestBody JwtRequest request, HttpServletResponse response) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new Exception("인증 정보가 정확하지 않습니다.", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        final String token = jwtUtils.generateToken(userDetails);

        Cookie jwtTokenCookie = new Cookie("Authorization", token);
        jwtTokenCookie.setMaxAge(86400);
        jwtTokenCookie.setSecure(true);
        jwtTokenCookie.setHttpOnly(true);
        jwtTokenCookie.setPath("/");
        response.addCookie(jwtTokenCookie);

        return Map.ofEntries(
                Map.entry(
                        "token" ,
                        jwtTokenCookie
                )
        );
    }

//    @PostMapping("/api/auth/login")
//    public Map<String, Object> login(@RequestBody JwtRequest request, HttpServletResponse response) {
//        final String token = jwtUtils.generateRandomToken();
//
//        Cookie jwtTokenCookie = new Cookie("Authorization", token);
//        jwtTokenCookie.setMaxAge(86400);
//        jwtTokenCookie.setSecure(true);
//        jwtTokenCookie.setHttpOnly(true);
//        jwtTokenCookie.setPath("/");
//        response.addCookie(jwtTokenCookie);
//
//        System.out.println(token);
//        return Map.ofEntries(
//                Map.entry(
//                       "token" ,
//                        jwtTokenCookie
//                )
//        );
//    }

    @PostMapping("/api/auth/logout")
    public Map<String, Object> logout(@RequestBody Object body, HttpServletResponse response) {
        Map<String, Object> map = new HashMap();
        final String token = jwtUtils.generateRandomToken();
        Cookie jwtTokenCookie = new Cookie("Authorization", token);
        jwtTokenCookie.setMaxAge(0);
        jwtTokenCookie.setSecure(true);
        jwtTokenCookie.setHttpOnly(true);
        jwtTokenCookie.setPath("/");
        response.addCookie(jwtTokenCookie);
        map.put("token", jwtTokenCookie);
        return map;
    }

    @GetMapping("/api/checkCookie")
    public String readAllCookies(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            return Arrays.stream(cookies)
                    .map(c -> c.getName() + "=" + c.getValue()).collect(Collectors.joining(", "));
        }
        return "No cookies";
    }
}
