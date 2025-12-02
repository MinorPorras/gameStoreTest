import { useEffect, useState } from "react";
import type { useSidebarOpenProps } from "../types/types";

export function useSidebarOpen({ initialState, sidebarRef, catalogRef}: useSidebarOpenProps) {
  const [sidebarOpen, setSidebarOpen] = useState(initialState);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

useEffect(() => {
    const filterSidebar = sidebarRef.current;
    const catalogContainer = catalogRef.current;

    // La verificación es más fiable
    if (filterSidebar && catalogContainer) {
      if (sidebarOpen) {
        // Lógica de mostrar
        filterSidebar.classList.remove("filter-sidebar-close");
        filterSidebar.classList.add("filter-sidebar-open");
        catalogContainer.classList.remove("catalog-no-sidebar");
      } else {
        // Lógica de ocultar
        filterSidebar.classList.add("filter-sidebar-close");
        filterSidebar.classList.remove("filter-sidebar-open");
        catalogContainer.classList.add("catalog-no-sidebar");
      }
    }
  }, [sidebarOpen, catalogRef, sidebarRef]);

  return { sidebarOpen, toggleSidebar };
}
