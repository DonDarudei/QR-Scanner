<template>
    <div>
        <p class="error">{{ errorMessage }}</p>

        <p class="decode-result">Last result: <b>{{ result }}</b></p>

        <button @click="switchCamera()">Switch Camera</button>
        <qrcode-stream @decode="onDecode" @init="onInit" :camera="facingMode"/>
    </div>
</template>

<script>
    /* eslint-disable */
    const REAR_CAMERA = {
        ideal: 'environment'
    }
    const FRONT_CAMERA = {
        exact: 'user'
    }
    export default {
        data() {
            return {
                result: '',
                errorMessage: '',
                facingMode: FRONT_CAMERA,
            }
        },
        methods: {
            switchCamera() {
                if (this.facingMode === FRONT_CAMERA) {
                    this.facingMode = REAR_CAMERA
                } else {
                    this.facingMode = FRONT_CAMERA
                }
            },
            onDecode(result) {
                this.result = result
            },

            onInit(promise) {
                promise.then(() => {
                        console.log('Successfully initilized! Ready for scanning now!')
                    })
                    .catch(error => {
                        if (error.name === 'NotAllowedError') {
                            this.errorMessage = 'Hey! I need access to your camera'
                        } else if (error.name === 'NotFoundError') {
                            this.errorMessage = 'Do you even have a camera on your device?'
                        } else if (error.name === 'NotSupportedError') {
                            this.errorMessage =
                                'Seems like this page is served in non-secure context (HTTPS, localhost or file://)'
                        } else if (error.name === 'NotReadableError') {
                            this.errorMessage = 'Couldn\'t access your camera. Is it already in use?'
                        } else if (error.name === 'OverconstrainedError') {
                            this.errorMessage =
                                'Constraints don\'t match any installed camera. Did you asked for the front camera although there is none?'
                        } else {
                            this.errorMessage = 'UNKNOWN ERROR: ' + error.message
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    .error {
        font-weight: bold;
        color: red;
    }
</style>