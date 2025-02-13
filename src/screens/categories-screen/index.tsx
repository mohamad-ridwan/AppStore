import UseCategories from "../../hooks/UseCategories";
import Container from "./Container";
import Content from "./Content";

export default function CategoriesScreen() {
    const {
        renderItemCategoriesScreen,
        categoriesScreenDataElement
    } = UseCategories()

    return (
        <Container>
            <Content
                categoriesScreenDataElement={categoriesScreenDataElement}
                renderItemCategoriesScreen={renderItemCategoriesScreen}
            />
        </Container>
    )
}