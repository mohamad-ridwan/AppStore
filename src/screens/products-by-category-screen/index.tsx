import { HomeTabScreenProps } from "../../types/navigation";
import Container from "./Container";
import Content from "./Content";

export default function ProductsByCategoryScreen({
    navigation, route
}: HomeTabScreenProps<'ProductsByCategory'>) {
    return (
        <Container>
            <Content />
        </Container>
    )
}