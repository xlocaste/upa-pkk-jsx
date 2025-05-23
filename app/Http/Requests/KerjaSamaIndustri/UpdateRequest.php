<?php

namespace App\Http\Requests\KerjaSamaIndustri;

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
            'nama_ksi' => ['required', 'string', 'max:255'],
            'bidang_fokus_ksi' => ['required', 'string', 'max:255'],
            'tahun_ksi' => ['required', 'max:' . date('Y')],
            'tahun_exit_ksi' => ['required', 'max:' . (date('Y') + 10)],
        ];
    }

    public function messages(): array
    {
        return [
            'nama_ksi.required' => 'Nama kerja sama industri wajib diisi.',
            'nama_ksi.string' => 'Nama kerja sama industri harus berupa teks.',
            'nama_ksi.max' => 'Nama kerja sama industri maksimal 255 karakter.',

            'bidang_fokus_ksi.required' => 'Bidang fokus kerja sama industri wajib diisi.',
            'bidang_fokus_ksi.string' => 'Bidang fokus kerja sama industri harus berupa teks.',
            'bidang_fokus_ksi.max' => 'Bidang fokus kerja sama industri maksimal 255 karakter.',

            'tahun_ksi.required' => 'Tahun kerja sama industri wajib diisi.',
            'tahun_ksi.max' => 'Tahun kerja sama industri tidak boleh lebih dari ' . date('Y') . '.',

            'tahun_exit_ksi.required' => 'Tahun exit kerja sama industri wajib diisi.',
            'tahun_exit_ksi.max' => 'Tahun exit kerja sama industri tidak boleh lebih dari ' . (date('Y') + 10) . '.',
        ];
    }
}
