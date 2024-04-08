import React, {useEffect} from 'react';
import { SoundOutlined, SoundTwoTone } from '@ant-design/icons';

const SoundControl = ({ audioRef, isSoundOn, toggleSound, playSound }) => {
    useEffect(() => {
        if (playSound && audioRef.current) {
            audioRef.current.play();
        }
    }, [playSound, audioRef]);


    return (
        <>
            {isSoundOn ? (
                <SoundTwoTone style={{fontSize: '22px'}} onClick={toggleSound} onPointerEnterCapture={undefined}
                              onPointerLeaveCapture={undefined} />
            ) : (
                <SoundOutlined style={{fontSize: '22px'}} onClick={toggleSound} onPointerEnterCapture={undefined}
                               onPointerLeaveCapture={undefined} />
            )}
        </>
    );
};

export default SoundControl;
