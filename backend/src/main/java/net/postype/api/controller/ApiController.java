package net.postype.api.controller;

import net.postype.api.repository.entity.Fruit;
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
              new Fruit( "d3f8", "배", 1000L ),
              new Fruit( "23gk", "사과", 800L )
      };
      return Arrays.asList(fruitlist);
   }
}
