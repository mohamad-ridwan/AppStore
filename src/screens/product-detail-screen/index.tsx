import useProductDetail from "../../hooks/useProductDetail";
import { HomeTabScreenProps } from "../../types/navigation";
import Container from "./Container";
import Content from "./Content";

export default function ProductDetailScreen({
    navigation, route
}: HomeTabScreenProps<'ProductDetail'>) {
    const { dataScreenElement, renderItemScreenData } = useProductDetail()
    return (
        <Container>
            <Content
                dataScreenElement={dataScreenElement}
                renderItemScreenElement={renderItemScreenData}
            />
        </Container>
    )
}