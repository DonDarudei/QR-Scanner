<template>
    <div>
        <div>Value: {{scanned}}</div>
        <vue-qr-reader ref="qr" v-on:code-scanned="codeScanned" :stop-on-scanned="true" :use-back-camera="true"
            :draw-on-found="true" line-color="#00FF00" :line-width="5" :video-height="480" :video-width="640" :responsive="true">
        </vue-qr-reader>
    </div>
</template>

<script>
    import VueQrReader from 'vue-qr-reader/dist/lib/vue-qr-reader.umd.js';
    export default {
        data: () => ({
            scanned: ""
        }),
        methods: {
            codeScanned(code) {
                this.scanned = code;
            }
        },
        components: {
            VueQrReader
        },
    }
</script>

<style>

</style>