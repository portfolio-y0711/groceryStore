package net.postype.api.typings;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class JwtRequest {
    private String username;
    private String password;
}
