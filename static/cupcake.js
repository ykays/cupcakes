async function load_all_cupcakes() {
  all_cupcakes = await axios.get("/api/cupcakes");
  for (let cupcake of all_cupcakes.data.cupcakes) {
    $("#list-cupcakes").append(`<li>${cupcake.flavor}</li>`);
  }
}

load_all_cupcakes();

$("#add").click(function (e) {
  e.preventDefault(), addNewCupcake(e);
});

async function addNewCupcake(e) {
  const flavor = $("#flavor").val();
  const size = $("#size").val();
  const rating = $("#rating").val();
  const image = $("#image").val();
  resp = await axios.post("/api/cupcakes", {
    flavor: flavor,
    size: size,
    rating: rating,
    image: image,
  });
  addToPage(resp);
  $("form")[0].reset();
}

function addToPage(resp) {
  $("#list-cupcakes").append(`<li>${resp.data.cupcake.flavor}</li>`);
}
