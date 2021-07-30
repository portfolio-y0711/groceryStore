package net.postype.api.repository.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class Fruit {
    @JsonProperty
    private String uuid;
    @JsonProperty
    private String name;
    @JsonProperty
    private Long price;

    public Fruit(String uuid, String name, Long price) {
        this.uuid = uuid;
        this.name = name;
        this.price = price;
    }
}
