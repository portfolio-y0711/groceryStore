package net.postype.api.controller;

import net.postype.api.repository.dao.FakeRepository;
import net.postype.api.repository.entity.Product;
import net.postype.api.repository.entity.ProductDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

interface HealthCheck {
   String status = "up";
}

@RestController
@RequestMapping("/api")
public class ApiController {

   @Autowired
   FakeRepository fakeRepository;

   @GetMapping("/health")
   public Map<String, Object> healtihcheck() {
      Map<String, Object> map = new HashMap();
      map.put("status", "up");
      return map;
   }

   @GetMapping("/products")
   public Map<String, List<Product>> getAllProducts() {
      return fakeRepository.findAllProducts();
   }

   @GetMapping("/products/{category}")
   public List<Product> getProducts(@PathVariable String category) {
      return fakeRepository.findProductByCategory(category);
   }

   @GetMapping("/products/{category}/{uuid}")
   public ProductDetail getProduct(@PathVariable String category, @PathVariable String uuid) {
      return fakeRepository.findProductByCatUuid(category, uuid);
   }

   @GetMapping("/products/search")
   public List<Product> getProductsByKeyword(@RequestParam String keyword) {
      System.out.println(keyword);
      return fakeRepository.findProductByKeyWord(keyword);
   }
}
