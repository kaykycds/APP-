import { StyleSheet, Text, View } from "react-native";

interface CardSaldoProps {
    titulo: string;
    valor: string | number;
    corFundo: string;
}

export default function CardSaldo({ titulo, valor, corFundo }: CardSaldoProps) {
    return (
        <View style={[Styles.card, { backgroundColor: corFundo }]}>
            <Text style={Styles.label}>{titulo}</Text>
            <Text style={Styles.valor}>{valor}</Text>

        </View>
    );
}

const Styles = StyleSheet.create({
    card: {
        padding: 15,
        borderRadius: 8,
        flex: 1,
    },

    label: {
        color: '#fff',
        fontSize: 14,
    },
    valor: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
    }
});