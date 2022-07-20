export async function getAGP() {
  return fetch(`/glucovisPrototype/raw/old/persons_agp.json`).then(res => res.json());
}

export async function getOverlay() {
  return fetch(`/glucovisPrototype/raw/old/persons_overlay.json`).then(res => res.json());
}

export async function getGlucoMine(person) {
  return fetch(`/glucovisPrototype/raw/old/person${person}_50pct.json`).then(res => res.json());
}

export async function getSummary() {
  return fetch(`/glucovisPrototype/raw/old/persons_summarystats.json`).then(res => res.json());
}