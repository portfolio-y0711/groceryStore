package net.postype.api.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtils implements Serializable {
    private static final long serialVersionUID = -2550185165626007488L;
//    public static final long JWT_TOKEN_VALIDITY = 10 * 60 * 60;

    private String secret = "secret";

    public String generateRandomToken() {
        Map<String, Object> claims = new HashMap<>();
        Long duration = 1000 * 60L * 60L * 24L;
        Date expireAt = new Date();
        expireAt.setTime(expireAt.getTime() + duration);

        return Jwts.builder()
                .setExpiration(expireAt)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }
}



