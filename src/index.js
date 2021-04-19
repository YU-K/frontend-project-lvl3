import "bootstrap/dist/css/bootstrap.min.css";

const createForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const text = document.createTextNode("Add");
  const formRow = document.createElement("div");
  const inputCol = document.createElement("div");
  const buttonCol = document.createElement("div");

  formRow.classList.add("d-flex");

  inputCol.classList.add("col", "pe-2");
  buttonCol.classList.add("col-auto");

  input.setAttribute("placeholder", "ссылка RSS");
  input.setAttribute("type", "text");
  input.setAttribute("autofocus", "");
  input.setAttribute("required", "");
  input.classList.add("form-control", "form-control-lg", "w-100");

  button.setAttribute("type", "submit");
  button.classList.add(
    "btn",
    "btn-lg",
    "btn-primary",
    "px-sm-5",
    "btn-primary"
  );
  button.appendChild(text);

  inputCol.appendChild(input);
  buttonCol.appendChild(button);

  formRow.appendChild(inputCol);
  formRow.appendChild(buttonCol);

  form.appendChild(formRow);

  return form;
};

const createMainBlock = () => {
  const row = document.createElement("div");
  const col = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const example = document.createElement("p");
  const pText = document.createTextNode(
    "Начните читать RSS сегодня! Это легко это красиво."
  );
  const h1Text = document.createTextNode("RSS агрегатор");
  const exampleText = document.createTextNode(
    "Пример: https://ru.hexlet.io/lessons.rss"
  );
  const form = createForm();

  row.classList.add("row");
  col.classList.add("col-md-10", "col-lg-8", "mx-auto", "text-white");
  h1.classList.add("display-3");
  p.classList.add("lead");
  example.classList.add("text-muted", "my-1");

  h1.appendChild(h1Text);
  p.appendChild(pText);
  example.appendChild(exampleText);

  col.appendChild(h1);
  col.appendChild(p);
  col.appendChild(form);
  col.appendChild(example);

  row.appendChild(col);

  return row;
};

const createContainer = () => {
  const container = document.createElement("section");

  container.classList.add("container-fluid", "bg-dark", "p-5");

  container.appendChild(createMainBlock());

  return container;
};

document.body.appendChild(createContainer());
