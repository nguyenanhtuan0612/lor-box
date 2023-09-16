import ImageRegion from '@/components/atoms/common/ImageRegion';
import { faClone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import placeHolder from '@/public/img/card-placeholder.png';
import { IDeckInfo } from '@/interface/deckInfo';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  generatingDeckcode: boolean;
  deckInfo: IDeckInfo;
  loading: boolean;
}

export default function ModalSaveDeck({ setShowModal, generatingDeckcode, deckInfo, loading }: Props) {
  return (
    <div className="absolute bg-gray-800/[.5] flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]">
      <div className="w-full flex justify-center">
        {/* <!-- Modal content -->*/}
        <div
          className="border relative overflow-hidden rounded-lg shadow bg-cover md:w-2/3 w-full h-auto"
          style={{ backgroundImage: `url('${deckInfo.mainCard?.fullAbsolutePath}')`, backgroundPosition: '50% 50%' }}
        >
          {loading ? (
            <div className="absolute h-full w-full bg-gray-800/[.4] z-40 flex justify-center items-center">
              <span className="loader"></span>
            </div>
          ) : null}
          <div className="absolute w-full h-full bg-gray-700/[.5]"></div>
          <div className="relative">
            {/* <!-- Modal header -->*/}
            <div className="flex items-start justify-between p-4">
              <h3 className="text-3xl font-semibold text-white">Thông tin bộ bài</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon icon={faXmark} size="xl" color="white" />
              </button>
            </div>
            <div className="flex w-full justify-center md:hidden">
              <div className="w-1/2 mx-0.5">
                <Image src={deckInfo.mainCard?.gameAbsolutePath || placeHolder} width={0} height={0} alt="card" sizes="60vw" style={{ width: '300px', height: 'auto' }} />
              </div>
            </div>
            {/* <!-- Modal body -->*/}
            <div className="p-6 space-y-6 flex justify-between">
              <div className=" w-72">
                <div className="text-white text-2xl font-bold">
                  <span>Khu vực: </span>
                </div>
                <div className="flex gap-2 ml-2 mt-2">
                  {deckInfo.regions.map(node => {
                    return <ImageRegion icon={node} />;
                  })}
                </div>
                <div className="text-white text-2xl font-bold mt-8">
                  <span>Tướng: </span>
                </div>
                <div className="flex gap-2 ml-2 mt-2">
                  {deckInfo.champions.length == 0 ? (
                    <p>Không có tướng nào</p>
                  ) : (
                    deckInfo.champions.map((node, i) => {
                      if (i + 1 == deckInfo.champions.length) {
                        return <p>{node}</p>;
                      }
                      return <p>{node},</p>;
                    })
                  )}
                </div>
                <div className="text-white text-2xl font-bold mt-8">
                  <span>Deckcode: </span>
                </div>
                <div className="flex mt-2">
                  <div className="flex gap-2 items-center h-10">
                    <input
                      disabled={generatingDeckcode}
                      value={generatingDeckcode ? 'Đang tạo deckcode...' : deckInfo.deckcode}
                      className="block w-60 h-full px-4 text-sm  border  rounded-lg bg-gray-700/[.9] border-gray-600 placeholder-gray-400 text-gray-200 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div
                      data-tooltip-id="tooltip"
                      data-tooltip-content={generatingDeckcode ? '' : 'Copy Deckcode'}
                      data-tooltip-place="top-start"
                      onClick={() => {
                        if (deckInfo.deckcode) {
                          navigator.clipboard.writeText(deckInfo.deckcode);
                        }
                      }}
                      className={`w-10 h-10 border active:bg-gray-800/[.7] hover:bg-gray-700/[.5] flex items-center justify-center rounded-md hover:cursor-pointer`}
                    >
                      <FontAwesomeIcon icon={faClone} color="white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex hidden">
                <div className="w-full mx-0.5">
                  <Image src={deckInfo.mainCard?.gameAbsolutePath || placeHolder} width={0} height={0} alt="card" sizes="60vw" style={{ width: '300px', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
