package net.postype.api.controller;

import net.postype.api.repository.entity.Fruit;
import net.postype.api.repository.entity.Vegetable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

interface HealthCheck {
   String status = "up";

}

@RestController
@RequestMapping("/api")
public class ApiController {

   @GetMapping("/health")
   public Map<String, Object> healthcheck() {
      Map<String, Object> map = new HashMap();
      map.put("status", "up");
      return map;
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
