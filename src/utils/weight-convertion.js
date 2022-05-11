import { ref, computed} from "vue";
export default function weightConvertion() {
    const kilo = ref(0);
    const convertWeight = computed( () => {
        return kilo.value * 2.20462;
    });

    return { kilo, convertWeight };
}