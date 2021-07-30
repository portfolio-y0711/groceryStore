package net.postype.api.repository.dao;

import net.postype.api.repository.entity.Fruit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ProductRepository extends JpaRepository<Fruit, Long>, JpaSpecificationExecutor<Fruit> {}
