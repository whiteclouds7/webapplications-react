function update(data) {
  d3.selectAll("p")
    .data(data)
    .join(
      (enter) => enter.append("p"),
      (update) => update,
      (exit) => exit.remove()
    )
    .text((v) => v);
}

update([5, 1, 8]);
setTimeout(function () {
  update([1, 4]);
}, 1000);
