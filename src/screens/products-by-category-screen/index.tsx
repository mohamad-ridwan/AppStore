import useCategories from "../../hooks/useCategories";
import { HomeTabScreenProps } from "../../types/navigation";
import Container from "./Container";
import Content from "./Content";

export default function ProductsByCategoryScreen({
    navigation, route
}: HomeTabScreenProps<'ProductsByCategory'>) {
    const {
        productsByCSDataElement,
        renderItemProductsByCategories,
    } = useCategories({ slug: (route.params as any)?.slug })
    return (
        <Container>
            <Content
                productsByCSDataElement={productsByCSDataElement}
                renderItemProductsByCategories={renderItemProductsByCategories}
            />
        </Container>
    )
}