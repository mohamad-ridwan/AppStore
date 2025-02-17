import UseCategories from "../../hooks/UseCategories";
import { HomeTabScreenProps } from "../../types/navigation";
import Container from "./Container";
import Content from "./Content";

export default function ProductsByCategoryScreen({
    navigation, route
}: HomeTabScreenProps<'ProductsByCategory'>) {
    const {
        productsByCSDataElement,
        renderItemProductsByCategories,
    } = UseCategories()
    return (
        <Container>
            <Content
                productsByCSDataElement={productsByCSDataElement}
                renderItemProductsByCategories={renderItemProductsByCategories}
            />
        </Container>
    )
}