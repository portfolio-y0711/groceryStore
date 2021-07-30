package net.postype.api.repository.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="fruit")
public class Fruit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

