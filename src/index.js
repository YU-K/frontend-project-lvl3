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
  const main = document.createElement("main");
  const section = document.createElement("section");
  const row = document.createElement("div");
  const col = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const example = document.createElement("p");
  const pText = document.createTextNode(
    "Начните читать RSS сегодня! Это легко, это красиво."
  );
  const h1Text = document.createTextNode("RSS агрегатор");
  const exampleText = document.createTextNode(
    "Пример: https://ru.hexlet.io/lessons.rss"
  );
  const form = createForm();

  section.classList.add("container-fluid", "bg-dark", "p-5");
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

  section.appendChild(row);
  main.appendChild(section);

  return main;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const text = document.createTextNode("created by ");
  const link = document.createElement("a");
  const linkText = document.createTextNode("Yuriy Katkov");

  link.setAttribute("href", "https://github.com/YU-K");

  link.classList.add("text-decoration-none");
  div.classList.add("container", "text-center");
  footer.classList.add(
    "footer",
    "position-absolute",
    "border-top",
    "py-3",
    "start-0",
    "end-0",
    "bottom-0",
    "mt-5"
  );
  span.classList.add("text-muted");

  link.appendChild(linkText);
  span.appendChild(text);
  span.appendChild(link);
  div.appendChild(span);
  footer.appendChild(div);

  return footer;
};

const main = createMainBlock();
const footer = createFooter();

document.body.appendChild(main);
document.body.appendChild(footer);
