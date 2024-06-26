import { useState, useEffect, useCallback } from 'react'

import './SideBarCompResizeBar.css'


export default function SideBarCompResizeBar({ resizeComp }) {
    const [width, setWidth] = useState(200);
    const [isResizing, setIsResizing] = useState(false);
    const [initialX, setInitialX] = useState(0);


    // 마우스 누르면 Resize모드 true
    const handleMouseDown = (e) => {
        // preventDefault를 통하여 마우스 이동 시 다른 이벤트가 생기는 것을 방지
        e.preventDefault();
        setIsResizing(true);
        setInitialX(e.clientX);
    };

    // 마우스를 움직이면 width 계산하여 상태 업데이트
    const handleMouseMove = useCallback((e) => {
        if (isResizing) {
            const movedDistance = e.clientX - initialX;
            const newWidth = width + movedDistance;

            if (newWidth >= 100 && newWidth <= 500) {
                setWidth(newWidth);
                setInitialX(e.clientX);
            }
        }
    }, [isResizing, initialX, width]);

    // 마우스 떼면 Resize모드 false
    const handleMouseUp = () => {
        setIsResizing(false);
    };


    // 마우스 커서가 빨리 움직여도 이벤트 적용
    useEffect(() => {
        const handleGlobalMouseUp = () => {
            setIsResizing(false);
        };

        const handleGlobalMouseMove = (e) => {
            handleMouseMove(e);
        };

        if (isResizing) {
            document.addEventListener('mouseup', handleGlobalMouseUp);
            document.addEventListener('mousemove', handleGlobalMouseMove);
        } else {
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('mousemove', handleGlobalMouseMove);
        }

        return () => {
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, [isResizing, handleMouseMove]);

    useEffect(() => {
        if (resizeComp) {
            resizeComp.style.width = `${width}px`
        }
    }, [width, resizeComp])


    return (
        <div
            className="SideBarCompResizeBar"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
        </div>
    )

}
