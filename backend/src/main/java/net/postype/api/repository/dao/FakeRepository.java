package net.postype.api.repository.dao;

import net.postype.api.repository.entity.Product;
import net.postype.api.repository.entity.ProductDetail;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static java.util.Map.entry;
import static net.postype.api.util.DaoUtils.toSingleton;

@Component
public class FakeRepository {
    Map<String, List<Product>> products =
            Map.ofEntries(
                    entry("fruits", Arrays.asList(
                            new Product("d3f8", "fruits", "신고산 배", "pear", 1000L),
                            new Product("23gk", "fruits", "영동 복숭아", "peach", 800L),
                            new Product("349t", "fruits", "영덕 사과", "apple", 800L),
                            new Product("f7pk", "fruits", "제주도 파인애플", "pineapple", 800L)
                    )),
                    entry("vegetables", Arrays.asList(
                            new Product("w8bj", "vegetables", "강원도 고랭지 배추", "cabbage", 1000L),
                            new Product("2irt", "vegetable", "강원도 홍감자", "potato_red", 800L),
                            new Product("9ti2", "vegetable", "돌산 생갓", "mustardleaf", 800L),
                            new Product("01rt", "vegetable", "제주도 브로콜리", "brocolli", 800L)
                    ))
            );

    Map<String, List<ProductDetail>> details =
            Map.ofEntries(
                    entry("fruits", Arrays.asList(
                            new ProductDetail("d3f8", "신고산 배", "pear" , "fruits", "영산강 유역의 비옥한 토양과 천혜의 환경에서 자란 나주 신고배", 1000L, 20000L, new String[]{""}, new String[]{"청과물", "야채", "당일배송"}),
                            new ProductDetail("23gk", "영동 복숭아", "peach", "fruits", "소백산맥 준령에 위치한 중산간지에서 생산되어 일교차가 큰 기후특성으로 당도가 높고, 향이 뛰어나며 색깔이 고와 전국 최고의 품질을 인정받는 영동 복숭아", 800L, 16000L, new String[]{""}, new String[]{""}),
                            new ProductDetail("349t", "영덕 사과" , "apple", "fruits", "아름다운 영덕에서 천년의 향기 강구항에서 해맞이 공원 해안가 작은 어촌 마을 에서 해풍을 밎으며 자라는 사과", 800L, 16000L, new String[]{""}, new String[]{""}),
                            new ProductDetail("f7pk", "제주도 파인애플", "pineapple", "fruits", "청정 지역에서 자라는 무농약 무방부제 열대과일", 800L, 16000L, new String[]{""}, new String[]{""})
                            )),
                    entry("vegetables", Arrays.asList(
                        new ProductDetail("w8bj", "강원도 고랭지 배추", "cabbage", "vegetables", "맑고 깨끗한 자연환경에서 자란 좋은 품종의 평창 고랭지 배추", 1000L, 20000L, new String[]{""}, new String[]{""}),
                            new ProductDetail("2irt", "강원도 홍감자", "potato_red", "vegetable", "7월에 수확 속이노란 붉은 강원도 홍감자", 800L, 16000L, new String[]{""}, new String[]{""}),
                            new ProductDetail("9ti2", "돌산 생갓", "mustardleaf", "vegetable", "여수 특산품 온화한 돌산 지역에서 해풍을 맞고 자란 노지 돌산 갓", 800L, 16000L, new String[]{""}, new String[]{""}),
                            new ProductDetail("01rt", "제주도 브로콜리", "brocolli", "vegetable", "항산화 물질과 다량의 칼슘 함유로 기미와 색소 침착 등의 피부 문제를 해결해주고, 노화 방지에도 탁월한 제주도 브로콜리", 500L, 10000L, new String[]{""}, new String[]{""})
                    ))
            );

    public Map<String, List<Product>> findAllProducts() {
        return this.products;
    }

    public List<Product> findProductByCategory(String category) {
        return this.products.get(category);
    }

    public ProductDetail findProductByCatUuid(String category, String uuid) {
        ProductDetail found = this.details
                .get(category)
                .stream()
                .filter(p -> p.getUuid().equals(uuid))
                .collect(toSingleton());
        return found;
    }
}
