const upload = document.querySelector("#upload");

const Picker = document.querySelector("#picker");

const Copy = document.querySelector("#copy");

const colorInput = document.querySelector("#input");

const image = document.querySelector("img");

let UploadedImage = "";

upload.addEventListener("change", (e) => {
  console.log(e.target.files[0]);

  let reader = new FileReader();

  reader.readAsDataURL(e.target.files[0]);

  reader.addEventListener("load", () => {
    UploadedImage = reader.result;

    image.src = `${UploadedImage}`;
  });
});

Picker.addEventListener("click", async () => {
  let eyeDroper = new EyeDropper();

  let detectedColor = await eyeDroper.open().then((res) => {
    return res.sRGBHex;
  });

  console.log(detectedColor);
  colorInput.value = detectedColor;
});

Copy.addEventListener("click", () => {
  navigator.clipboard.writeText(colorInput.value);
});
