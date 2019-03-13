<template>
    <div id="">
        <button type="button" @click="navigateTo({name: 'test'})">Click Me!</button>
        <button type="button" @click="showQR()">Don is Gai</button>
    </div>
</template>

<script>
    import QRScanner from 'cordova-plugin-qrscanner' /* eslint-disable */
    export default {
        methods: {
            navigateTo(route) {
                QRScanner.hide(function (status) {
                    console.log(status);
                });
                this.$router.push(route)
            },
            openScan() {
                console.log("In the method")
                QRScanner.prepare((err, status) => {
                    console.log("1")
                    if (err) {
                        // here we can handle errors and clean up any loose ends.
                        console.error(err);
                    }
                    if (status.authorized) {
                        // W00t, you have camera access and the scanner is initialized.
                        // QRscanner.show() should feel very fast.
                        console.log("It has been authorized")
                    } else if (status.denied) {
                        console.log("It has not been authorized")

                        // The video preview will remain black, and scanning is disabled. We can
                        // try to ask the user to change their mind, but we'll have to send them
                        // to their device settings with `QRScanner.openSettings()`.
                    } else {
                        // we didn't get permission, but we didn't get permanently denied. (On
                        // Android, a denial isn't permanent unless the user checks the "Don't
                        // ask again" box.) We can ask again at the next relevant opportunity.
                        console.log("Something happened")

                    }
                }); // show the prompt
            },
            tryScan() {
                // var callback = function (err, contents) {
                //     if (err) {
                //         console.error(err._message);
                //     }
                //     alert('The QR Code contains: ' + contents);
                //     console.log(contents + "Kappa Baby")


                //     QRScanner.hide(function (status) {
                //         console.log(status);
                //     });
                // };

                // QRScanner.scan(callback);
            },
            // tryScan() {
            //     var back = 0; // default camera on plugin initialization
            //     var front = 1;
            //     QRScanner.useCamera(front, function (err, status) {
            //         if (err) {
            //             console.error(err._message);
            //         }
            //         alert('The QR Code contains: ' + status);
            //         QRScanner.hide(function (status) {
            //             console.log(status);
            //         });
            //     });
            // },
            showQR() {
                // QRScanner.show(function (status) {
                //     console.log(status);
                // });
            }
        },
        mounted() {
            this.openScan();
            console.log("Is this even working")
            // this.tryScan();
        }
    }
</script>

<style>

</style>