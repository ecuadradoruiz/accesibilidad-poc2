// Lógica de comportamiento para las pestañas
const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Desactivar todas las pestañas
    tabs.forEach((t) => {
      t.setAttribute("aria-selected", "false");
    });

    // Ocultar todos los paneles
    tabPanels.forEach((panel) => {
      panel.setAttribute("aria-hidden", "true");
    });

    // Activar la pestaña seleccionada
    tab.setAttribute("aria-selected", "true");
    const panelId = tab.getAttribute("aria-controls");
    document.getElementById(panelId).setAttribute("aria-hidden", "false");
  });
});