<?php

namespace App\Http\Requests\PraInkubasi;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'nama_usaha'=> ['required', 'string', 'max:255'],
            'prodi'=> ['required', 'string', 'max:100'],
            'kelas'=> ['required', 'string', 'max:10'],
            'semester'=> ['required', 'integer', 'min:1', 'max:14'],
            'brand_produk'=> ['required', 'string', 'max:255'],
            'link'=> ['required', 'url', 'max:255'],
        ];
    }

    public function messages(): array
    {
        return [
            'nama_usaha.required' => 'Nama usaha wajib diisi.',
            'nama_usaha.string' => 'Nama usaha harus berupa teks.',
            'nama_usaha.max' => 'Nama usaha maksimal 255 karakter.',

            'prodi.required' => 'Prodi wajib diisi.',
            'prodi.string' => 'Prodi harus berupa teks.',
            'prodi.max' => 'Prodi maksimal 100 karakter.',

            'kelas.required' => 'Kelas wajib diisi.',
            'kelas.string' => 'Kelas harus berupa teks.',
            'kelas.max' => 'Kelas maksimal 10 karakter.',

            'semester.required' => 'Semester wajib diisi.',
            'semester.integer' => 'Semester harus berupa angka bulat.',
            'semester.min' => 'Semester minimal 1.',
            'semester.max' => 'Semester maksimal 14.',

            'brand_produk.required' => 'Brand produk wajib diisi.',
            'brand_produk.string' => 'Brand produk harus berupa teks.',
            'brand_produk.max' => 'Brand produk maksimal 255 karakter.',

            'link.required' => 'Link wajib diisi.',
            'link.url' => 'Link harus berupa URL yang valid.',
            'link.max' => 'Link maksimal 255 karakter.',
        ];
    }
}
