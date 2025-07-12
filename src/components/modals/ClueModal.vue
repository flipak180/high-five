<script setup lang="ts">
import {IonButton} from '@ionic/vue';
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
    <div class="clues">
        <ion-button expand="block" color="success">
            <div class="clue">
                <div class="clue__title">Буква</div>
                <div class="clue__price">
                    <span>
                        20
                        <FontAwesomeIcon class="clue__icon" :icon="faCoins" />
                    </span>
                </div>
            </div>
        </ion-button>
        <ion-button expand="block" color="success">
            <div class="clue">
                <div class="clue__title">Слово</div>
                <div class="clue__price">
                    <span>
                        50
                        <FontAwesomeIcon class="clue__icon" :icon="faCoins" />
                    </span>
                </div>
            </div>
        </ion-button>
    </div>
</template>

<style lang="scss">
.clue-modal {
    --width: calc(100% - 32px);
    //--max-width: 250px;
    --height: fit-content;
    --border-radius: 6px;
    --background: transparent;
    --backdrop-opacity: .4;

    .clues {
        color: var(--black);
        display: flex;
        gap: 8px;
        padding: 8px;

        ion-button {
            flex-grow: 1;
        }

        .clue {
            display: flex;
            flex-direction: column;
            gap: 8px;

            &__title {
                font-weight: 400;
            }
            &__price > span {
                background: #95c87b;
                padding: 3px 10px;
                border-radius: 16px;
                font-weight: 400;
                font-size: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            &__icon {
                color: #FFD166;
            }
        }
    }
}
</style>
