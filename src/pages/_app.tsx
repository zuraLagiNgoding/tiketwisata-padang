import "@/styles/globals.css";
import type { AppProps } from "next/app";
import clsx from "clsx";
import useModal from "@/stores/modal";
import MainLayout from "@/components/Layouts/MainLayout";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }: AppProps) {
  const { current } = useModal();
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

      <div
        className={clsx(
          "fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-black/50 flex items-center justify-center",
          current ? "" : "hidden"
        )}
      >
        {current}
      </div>
    </>
  );
}
