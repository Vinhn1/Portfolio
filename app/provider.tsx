"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Component ThemeProvider bọc provider của next-themes
 * Component này cho phép chuyển đổi theme (chế độ sáng/tối) trong ứng dụng
 *
 * @param children - Các component React sẽ được bọc bởi theme provider
 * @param props - Các props bổ sung để truyền vào NextThemesProvider
 * @returns Component NextThemesProvider với context theme
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // Truyền tất cả props bổ sung vào NextThemesProvider
  // Cho phép truyền các tùy chọn cấu hình như defaultTheme, storageKey, v.v.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
