import { memo } from "react";
import { PixelRatio, StyleSheet, Text } from "react-native";

type Props = {
    description: string
}

const Description = memo(({ description }: Props) => {
    return (
        <Text style={styles.desc}>
            {description}
        </Text>
    )
})

export default Description

const styles = StyleSheet.create({
    desc: {
        fontSize: 13 * PixelRatio.getFontScale(),
        lineHeight: 19
    }
})