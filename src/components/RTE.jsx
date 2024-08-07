import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div>
            {label && <label>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Editor
                        apiKey="2iwz3i54cmeaf13lrh0qrf80pdx9lbpek7k0oc5nw73yigse"
                        initialValue={defaultValue}
                        init={{
                            height: 350,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "help",
                                "wordcount",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        value={value}
                        onEditorChange={onChange}
                        onBlur={onBlur}
                    />
                )}
            />
        </div>
    );
}
