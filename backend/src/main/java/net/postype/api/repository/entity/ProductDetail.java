package net.postype.api.repository.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProductDetail {

    @JsonProperty
    private String uuid;

    @JsonProperty
    private String name;

    @JsonProperty
    private String category;

    @JsonProperty
    private String description;

    @JsonProperty
    private String image;

    @JsonProperty
    private Long unitPrice;

    @JsonProperty
    private Long bundlePrice;

    @JsonProperty
    private String[] categories;

    @JsonProperty
    private String[] tags;

    public ProductDetail(
            String uuid,
            String name,
            String image,
            String category,
            String description,
            Long unitPrice,
            Long bundlePrice,
            String[] categories,
            String[] tags
    ) {
        this.uuid = uuid;
        this.name = name;
        this.image = image;
        this.category = category;
        this.description = description;
        this.unitPrice = unitPrice;
        this.bundlePrice = bundlePrice;
        this.categories = categories;
        this.tags = tags;
    }
}
