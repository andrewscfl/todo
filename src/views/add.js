import React from 'react';

export default function AddButton(props) {
    return (
        <div className="floating-add-button"
            onClick={() => props.openModalCallback()}
        >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6C10 7.10457 10.8954 8 12 8H17C17.5523 8 18 8.44771 18 9C18 9.55229 17.5523 10 17 10H12C10.8954 10 10 10.8954 10 12V17C10 17.5523 9.55229 18 9 18C8.44771 18 8 17.5523 8 17V12C8 10.8954 7.10457 10 6 10H1C0.447715 10 0 9.55229 0 9C0 8.44771 0.447715 8 1 8H6C7.10457 8 8 7.10457 8 6V1C8 0.447715 8.44771 0 9 0C9.55229 0 10 0.447715 10 1V6Z" fill="#292639" />
            </svg>

        </div>
    );
}