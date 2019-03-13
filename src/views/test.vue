<template>
    <div id='app'>
        <h1>Don Succ</h1>
        <button type="button" @click="navigateTo({name: 'vuecodeqr'})">Scan QR</button><br><br>
        Enter Input: <input type="text" v-model="Input"><br>
        <button type="button" @click="testQR()">Generate QR</button>
        <div id=qr>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            Input: 'Kelf Gay'
        }),
        methods: {
            testQR() {
                this.removeQRElement()
                var QRCode = require('qrcode')

                QRCode.toCanvas(this.Input, {
                    errorCorrectionLevel: 'H',
                    scale: 8
                }, function (err, canvas) {
                    if (err) throw err
                    var container = document.getElementById('qr')
                    container.appendChild(canvas)
                })
            },
            removeQRElement(){
                document.getElementById('qr').innerHTML = "";
            },
            navigateTo(route) {
                this.$router.push(route)
            }
        },
        mounted() {
            this.testQR()
        }
    }
</script>

<style>
#app{
    background-color: transparent;
}

</style>