package net.postype.api.service;

import net.postype.api.repository.dao.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class FruitService {

    private final ProductRepository fruitRepository;

    public FruitService(ProductRepository fruitRepository) {
        this.fruitRepository = fruitRepository;
    }
}
