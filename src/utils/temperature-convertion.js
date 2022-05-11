import { ref, computed} from "vue";
export default function temperatureConvertion() {
    const celsius = ref(0);

    const convertTemperature = computed( () => {
        return (celsius.value * 9/5) + 32;
    });

    return { celsius, convertTemperature }
}