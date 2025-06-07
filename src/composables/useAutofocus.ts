import {Ref, useTemplateRef} from "vue";
import {onIonViewDidEnter} from "@ionic/vue";

export function useAutofocus() {
    const autofocus: Ref = useTemplateRef('autofocus');

    onIonViewDidEnter(async () => {
        setTimeout(() => {
            autofocus.value.$el.setFocus()
        }, 500)
    })
}
