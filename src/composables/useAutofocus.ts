import {onMounted, Ref, useTemplateRef} from "vue";
import {onIonViewDidEnter} from "@ionic/vue";

export function useAutofocus() {
    const autofocus: Ref = useTemplateRef('autofocus');

    onIonViewDidEnter(focus)
    onMounted(focus)

    function focus() {
        setTimeout(() => {
            autofocus.value.$el.setFocus()
        }, 500)
    }
}
