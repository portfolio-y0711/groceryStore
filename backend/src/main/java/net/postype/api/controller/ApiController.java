package net.postype.api.controller;

import net.postype.api.repository.dao.FakeRepository;
import net.postype.api.repository.entity.Fruit;
import net.postype.api.repository.entity.Product;
import net.postype.api.repository.entity.ProductDetail;
import net.postype.api.repository.entity.Vegetable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
   public Map<String, Object> healthcheck() {
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

   @GetMapping("/fruits")
   public List<Fruit> getFruits() {
      Fruit[] fruitlist = {
              new Fruit( "d3f8", "신고산 배", 1000L ),
              new Fruit( "23gk", "나주 배", 800L ),
              new Fruit( "349t", "영덕 사과", 800L ),
              new Fruit( "f7pk", "경주 사과", 800L )
      };
      return Arrays.asList(fruitlist);
   }

   @GetMapping("/fruits/{uuid}")
   public Fruit getFruitDetail(@PathVariable("uuid") String uuid) {
        return new Fruit( "d3f8", "신고산 배", 1000L );
   }


   @GetMapping("/vegetables")
   public List<Vegetable> getVegetables() {
      Vegetable[] vegetablelist = {
              new Vegetable( "w8bj", "강원도 고랭지 배추", 1000L ),
              new Vegetable( "2irt", "강원도 홍감자", 800L ),
              new Vegetable( "9ti2", "돌산 생갓", 800L ),
              new Vegetable( "01rt", "완도 김", 800L )
      };
      return Arrays.asList(vegetablelist);
   }
}
