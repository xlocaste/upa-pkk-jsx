<?php

namespace App\Http\Requests\Alumni;

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
            'nim' => ['nullable', 'string'],
            'nama' => ['required', 'string'],
            'hp' => ['required', 'string'],
            'email' => ['nullable', 'email'],
            'tempat_magang' => ['nullable', 'string'],
            'judul_magang' => ['nullable', 'string'],
            'judul_tugas_akhir' => ['nullable', 'string'],
            'tahun_lulus' => ['required', 'digits:4', 'integer'],
            'nik' => ['nullable', 'string'],
            'npwp' => ['nullable', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'nim.unique' => 'NIM sudah terdaftar sebagai alumni.',
            'nama.required' => 'Nama wajib diisi.',
            'hp.required' => 'Nomor HP wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'tahun_lulus.required' => 'Tahun lulus wajib diisi.',
            'tahun_lulus.digits' => 'Tahun lulus harus terdiri dari 4 digit.',
        ];
    }
}
