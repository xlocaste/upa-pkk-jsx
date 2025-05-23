<?php

namespace App\Http\Requests\MiniIndustriKampus;

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
            'nama_mik' => ['required', 'string', 'max:255'],
            'bidang_fokus_mik' => ['required', 'string', 'max:255'],
            'tahun_mik' => ['required', 'max:' . date('Y')],
            'tahun_exit_mik' => ['required', 'max:' . (date('Y') + 10)],
        ];
    }

    public function messages(): array
    {
        return [
            'nama_mik.required' => 'Nama mini industri kampus wajib diisi.',
            'nama_mik.string' => 'Nama mini industri kampus harus berupa teks.',
            'nama_mik.max' => 'Nama mini industri kampus maksimal 255 karakter.',

            'bidang_fokus_mik.required' => 'Bidang fokus mini industri kampus wajib diisi.',
            'bidang_fokus_mik.string' => 'Bidang fokus mini industri kampus harus berupa teks.',
            'bidang_fokus_mik.max' => 'Bidang fokus mini industri kampus maksimal 255 karakter.',

            'tahun_mik.required' => 'Tahun mini industri kampus wajib diisi.',
            'tahun_mik.max' => 'Tahun mini industri kampus tidak boleh lebih dari ' . date('Y') . '.',

            'tahun_exit_mik.required' => 'Tahun exit mini industri kampus wajib diisi.',
            'tahun_exit_mik.max' => 'Tahun exit mini industri kampus tidak boleh lebih dari ' . (date('Y') + 10) . '.',
        ];
    }

}
