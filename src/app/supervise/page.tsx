"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Switch from "@/components/Switch/Switch";
import { database } from "@/configs/filebaseConfig";
import {
  get,
  push,
  ref,
  getDatabase,
  set,
  onValue,
  child,
  update,
} from "firebase/database";
import { collectionGroup } from "firebase/firestore";
import { use, useContext, useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IuserData {
  id: string;
  data: string;
  status: boolean;
}

export default function Page() {
  const [users, setUsers] = useState<IuserData[]>([]);
  const starCountRef = ref(database, "Monitor");
  const [camBien1, setCamBien1] = useState<string>("");
  const [camBien2, setCamBien2] = useState<string>("");
  const [bright, setBright] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const customId = "custom-id-yes";

  useEffect(() => {
    const usersRef = ref(database, "Monitor");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userArray = Object.entries(snapshot.val()).map(
            ([id, data]: any) => ({
              id,
              ...data,
            }),
          );
          // notify();
          setLoading(false);
          // notify();

          setUsers(userArray);
          const datCamBien1 = userArray.find((e) => e.id == "CAMBIEN1");
          const datCamBien2 = userArray.find((e) => e.id == "cambien2");
          const brightData = userArray.find((e) => e.id == "Relay Output 1");
          setCamBien1(datCamBien1.data);
          setCamBien2(datCamBien2.data);
          setBright(brightData.data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    onValue(starCountRef, (snapshot) => {
      if (snapshot.exists()) {
        const userArray = Object.entries(snapshot.val()).map(
          ([id, data]: any) => ({
            id,
            ...data,
          }),
        );

        setUsers(userArray);
        const datCamBien1 = userArray.find((e) => e.id == "CAMBIEN1");
        const datCamBien2 = userArray.find((e) => e.id == "cambien2");
        const brightData = userArray.find((e) => e.id == "Relay Output 1");
        setCamBien1(datCamBien1.data);
        setCamBien2(datCamBien2.data);
        setBright(brightData.data);
      }
    });
  }, []);

  const notify = () =>
    toast.success("Page loaded successfully!", {
      toastId: customId,
    });

  function writeNewPost() {
    const db = getDatabase();
    const data = users.find((el) => el.id == "Relay Output 1");
    const postData = { status: data?.status, data: 2 };
    const updates: any = {};
    updates["/Monitor/" + "Relay Output 1"] = postData;

    return update(ref(db), updates)
      .then(() => {
        console.log("update thanh cong");
        notify();
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <div className="h-screen">
        <DefaultLayout>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Breadcrumb pageName="GIÁM SÁT" />
          {loading ? (
            <Loader />
          ) : (
            <div className="h-[100%] bg-[#D9D9D9] ">
              {/* <h1 className="text-centber">Độ rọi trong phòng</h1> */}
              <div className="block justify-around sm:flex">
                <div className="p-10">
                  <div className="mb-4 flex  flex-col justify-center sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="text-xl text-gray-100 block text-sm font-black font-medium leading-6"
                    >
                      Giá trị cảm biến 1
                    </label>
                    <div className="mt-2">
                      <input
                        value={camBien1}
                        type="number"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block rounded-md  border-0 p-2 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                  </div>
                  <div className="flex flex-col  justify-center sm:col-span-3 ">
                    <label
                      htmlFor="first-name"
                      className="text-xl text-gray-900 block text-sm font-black font-medium leading-6"
                    >
                      Giá trị cảm biến 2
                    </label>
                    <div className="mt-2">
                      <input
                        value={camBien2}
                        type="number"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block rounded-md  border-0 p-2 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <label
                    htmlFor="first-name"
                    className=" text-xl text-gray-900 block text-sm font-black font-medium leading-6"
                  >
                    Trạng thái đèn
                  </label>

                  <div className="flex justify-around sm:justify-between">
                    <div className="flex flex-col items-center justify-center text-center">
                      <label
                        htmlFor="first-name"
                        className="text-gray-900 block text-sm font-medium leading-6"
                      >
                        ON
                      </label>
                      {bright == "1" ? (
                        <Switch color={"bg-green-400"}></Switch>
                      ) : (
                        <Switch></Switch>
                      )}
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                      <label
                        htmlFor="first-name"
                        className="text-gray-900 block text-sm font-medium leading-6"
                      >
                        OFF
                      </label>

                      {bright == "0" ? (
                        <Switch color={"bg-rose-500"}></Switch>
                      ) : (
                        <Switch></Switch>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <label
                    htmlFor="first-name"
                    className="text-xl text-gray-900 ta block text-sm font-black font-medium leading-6"
                  >
                    Chế độ hoạt động
                  </label>
                  <div className="flex justify-around sm:justify-between">
                    <div className="flex flex-col items-center justify-center text-center">
                      <label
                        htmlFor="first-name"
                        className="text-gray-900 block text-sm font-medium leading-6"
                      >
                        MANUAL
                      </label>
                      {bright == "1" ? (
                        <Switch color={"bg-green-400"}></Switch>
                      ) : (
                        <Switch></Switch>
                      )}
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                      <label
                        htmlFor="first-name"
                        className="text-gray-900 block text-sm font-medium leading-6"
                      >
                        AUTO
                      </label>

                      {bright == "0" ? (
                        <Switch color={"bg-rose-500"}></Switch>
                      ) : (
                        <Switch></Switch>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DefaultLayout>
      </div>
    </>
  );
}
