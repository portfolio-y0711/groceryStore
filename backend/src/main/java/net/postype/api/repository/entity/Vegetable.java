package net.postype.api.repository.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Vegetable {
    @JsonProperty
    private String uuid;
    @JsonProperty
    private String name;
    @JsonProperty
    private Long price;

    public Vegetable(String uuid, String name, Long price) {
        this.uuid = uuid;
        this.name = name;
        this.price = price;
    }
}
