package net.postype.api.repository.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;

@Getter
@Setter
@ToString
public class Product {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;

    @JsonProperty
    private String uuid;

    @JsonProperty
    private String category;

    @JsonProperty
    private String name;

    @JsonProperty
    private String image;

    @JsonProperty
    private Long price;

    public Product(String uuid, String category, String name, String image, Long price) {
        this.uuid = uuid;
        this.category = category;
        this.name = name;
        this.image = image;
        this.price = price;
    }
}

