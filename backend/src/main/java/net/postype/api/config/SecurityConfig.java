package net.postype.api.config;

import net.postype.api.config.jwt.AuthUserDetailsService;
import net.postype.api.config.jwt.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private AuthUserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable().cors().configurationSource(request -> {
            CorsConfiguration cors = new CorsConfiguration();
            cors.setAllowedOrigins(Arrays.asList("*"));
            cors.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
            cors.setAllowedHeaders(Arrays.asList(HttpHeaders.CONTENT_TYPE, HttpHeaders.AUTHORIZATION));
            cors.setMaxAge(3600L);
            return cors;

        })
                .and().authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/api/health").permitAll()
                .antMatchers("/api/auth/login").permitAll()
                .antMatchers("/api/auth/logout").permitAll()
                .antMatchers("/api/checkCookie").permitAll()
                .antMatchers("/api/**").permitAll()

                .antMatchers("/images/**").permitAll()
                .antMatchers("/static/**").permitAll()
                .antMatchers("/h2-console/**").permitAll()
                .anyRequest().authenticated().and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        httpSecurity.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
            .ignoring()
            .antMatchers("/v2/api-docs", "/configuration/ui", "/swagger-resources/**", "/configuration/**",
            "/swagger-ui.html", "/webjars/**", "/h2-console/**", "/favicon.ico");
    }
}

