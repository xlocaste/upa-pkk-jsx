<?php

namespace App\Http\Requests\LowonganPekerjaan;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'judul_lowongan_kerja' => ['required'],
            'deskripsi' => ['required'],
            'kontak' => ['required'],
            'image' => ['required', 'image', 'mimes:jpg,jpeg,png'],
        ];
    }

    public function messages(): array
    {
        return [
            'judul_lowongan_kerja.required' => 'Judul lowongan kerja wajib diisi.',
            'deskripsi.required' => 'Deskripsi wajib diisi.',
            'kontak.required' => 'Kontak wajib diisi.',
            'image.required' => 'Gambar wajib diunggah.',
            'image.image' => 'File harus berupa gambar.',
            'image.mimes' => 'Format gambar harus JPG, JPEG, atau PNG.',
            'image.max' => 'Ukuran gambar maksimal 2 MB.',
        ];
    }
}
