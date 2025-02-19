import useCategories from "../../hooks/useCategories";
import Container from "./Container";
import Content from "./Content";

export default function CategoriesScreen() {
    const {
        renderItemCategoriesScreen,
        categoriesScreenDataElement
    } = useCategories({})

    return (
        <Container>
            <Content
                categoriesScreenDataElement={categoriesScreenDataElement}
                renderItemCategoriesScreen={renderItemCategoriesScreen}
            />
        </Container>
    )
}